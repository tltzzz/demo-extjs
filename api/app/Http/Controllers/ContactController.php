<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Models\Phone;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::with('phones')->get();
        return response(['contacts' => ContactResource::collection($contacts), 'total' => 1]);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $contact = Contact::create($data);

        return response(['contact' => new ContactResource($contact), 'message' => 'Контакт создан']);
    }

    public function show($id)
    {
        $contact = Contact::with('phones')->find($id);
        return response(['contact' => new ContactResource($contact)]);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();

        $contact = Contact::with('phones')->find($id);
        $contact->update($data);

        if (isset($data['phones'])) {
            foreach($data['phones'] as $item) {
                if (isset($item['id'])) {
                    $phone = Phone::find($item['id']);
                    if (isset($item['number'])) {                        
                        $phone->update($item);
                    } else {
                        $phone->delete();
                    }
                } else {
                    $item['contact_id'] = $id;
                    Phone::create($item);
                }
            }
        }

        $contact = Contact::with('phones')->find($id);
        return response(['contact' => new ContactResource($contact), 'message' => 'Контакт изменён']);
    }

    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();

        return response(['message' => 'Контакт удалён']);
    }
}
