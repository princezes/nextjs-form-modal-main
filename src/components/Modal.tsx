"use client"

import {
    Dialog,
    DialogOverlay,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { AlertConfirmation } from "./AlertConfirmation"
import { useRouter } from "next/navigation"
import { useState } from 'react'

export function Modal({
    children,
}: {
    children: React.ReactNode
}) {
    const [showExitConfirmation, setShowExitConfirmation] = useState(false)
    const router = useRouter()

    const closeModal = () => {
        router.back()
    }

    const handleOpenChange = () => {
        const isUserFormModified = localStorage.getItem("userFormModified")
        if (isUserFormModified && JSON.parse(isUserFormModified)) {
            setShowExitConfirmation(true)
        } else {
            router.back()
        }
    }

    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay>
                <DialogContent className="overflow-y-hidden">
                    <DialogTitle className="text-2xl text-center">Dialog Title</DialogTitle>
                    <AlertConfirmation
                        open={showExitConfirmation}
                        setOpen={setShowExitConfirmation}
                        confirmationAction={closeModal}
                        message="You haven't saved your changes. Please confirm you want to exit without saving."
                    />
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}