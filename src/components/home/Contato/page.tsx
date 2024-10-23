'use client'
import { useState } from "react"
import styles from './Contato.module.css'
import { PatternFormat } from "react-number-format"



interface TelefoneMask {
    lastValue: string
}



export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        if (result.success) {
            alert('E-mail enviado com sucesso!')
        } else {
            alert('Erro ao enviar o e-mail!')
        }

        setFormData({
            nome: '',
            email: '',
            telefone: ''
        })
    }

    return (
        <div id="contato" className={styles.contato}>
            <h1 className={styles.title}>Contato</h1>
            <p className={styles.text}>
                Preencha o formulário abaixo e baixe o conteúdo da nossa campanha.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Nome"
                    className={styles.input}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E-mail"
                    className={styles.input}
                    required
                />

                <PatternFormat
                    type="text"
                    name="telefone"
                    format="(##) #####-####"
                    mask="_"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="Telefone"
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>Enviar</button>
            </form>
        </div>
    )
}
