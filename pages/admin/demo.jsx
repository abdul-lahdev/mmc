
import { useState } from "react";
import CommentDropdown from "../../components/CommentDrop";
import MatchFunder from "../../components/MatchFunder";
// import CKEditorComponent from "../../components/CKEditorComponent";
export default function Demo() {

    return (

        <>
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-4">Create Post</h1>
                <CommentDropdown />
                {/* <CKEditorComponent /> */}

            </div>
            <div>
                <MatchFunder />
            </div>

        </>
    )
}