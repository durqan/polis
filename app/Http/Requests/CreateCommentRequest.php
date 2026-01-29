<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCommentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'author_name' => 'required|string|max:100',
            'text' => 'required|string|max:1000',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'author_name.required' => 'Имя обязательно',
            'author_name.max' => 'Имя не должно превышать 100 символов',
            'text.required' => 'Комментарий обязателен',
            'text.max' => 'Комментарий не должен превышать 1000 символов',
        ];
    }
}
