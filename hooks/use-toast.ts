'use client'

import { useState } from 'react'
import { ReactNode } from 'react'

export function useToast() {
    const [toasts, setToasts] = useState<Array<{
        id: string
        title: string
        description?: string
        variant: 'default' | 'destructive'
        action?: ReactNode,
    }>>([])

    const toast = ({
        title,
        description,
        variant = 'default',
    }: {
        title: string
        description?: string
        variant?: 'default' | 'destructive'
    }) => {
        const id = Math.random().toString(36).substring(2, 9)
        setToasts((current) => [...current, { id, title, description, variant }])
    }

    return { toasts, toast }
}