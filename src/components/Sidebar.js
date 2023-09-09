import React from "react"
import Showdown from "showdown"

export default function Sidebar(props) {

    function markDownToText(markdown) {
        const converter = new Showdown.Converter();
        const html = converter.makeHtml(markdown);
        const plainText = html.replace(/<[^>]*>/g, '');
        return plainText;
    }

    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">
                    {markDownToText(note.body.split("\n")[0])}
                </h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
