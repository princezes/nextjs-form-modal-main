import { readUser } from "@/app/actions/actions"
import UserForm from "./UserForm"
// import { getUser } from "@/lib/getUser"



export default async function EditUser({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

    // const user = await getUser(id)
    const user = await readUser(id)

    if (!user?.id) {
        return (
            <div className="p-8 max-w-md space-y-2">
                <h1 className="text-2xl">
                    No User Found for that ID.
                </h1>
            </div>
        )
    }

    return (
        <div className="p-8 max-w-md space-y-2">
            <h1 className="text-2xl">Edit User {id}</h1>
            <UserForm user={user} />
        </div>
    )
}