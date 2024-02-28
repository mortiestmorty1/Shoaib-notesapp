import * as React from 'react';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as Syncfusion from '@syncfusion/ej2-base';
Syncfusion.License.registerLicense('GTIlMmhhZ31hfWBoYWR8Y2B8YWNhZ3Njamlma2lhYGg4YWNjYWFqEz0mfTY3Jn0jOA==');

import '../App.css';

function TEXT() {
  return (
      <RichTextEditorComponent>
          <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>

          <p><b>Key features:</b></p>
          <ul>
              <li>
                  <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
              </li>
              <li>
                  <p>Capable of handling markdown editing.</p>
              </li>
              <li>
                  <p>Contains a modular library to load the necessary functionality on demand.</p>
              </li>
              <li>
                  <p>Provides a fully customizable toolbar.</p>
              </li>
              <li>
                  <p>Provides HTML view to edit the source directly for developers.</p>
              </li>
              <li>
                  <p>Supports third-party library integration.</p>
              </li>
              <li>
                  <p>Allows preview of modified content before saving it.</p>
              </li>
              <li>
                  <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
              </li>
              <li>
                  <p>Contains undo/redo manager.</p>
              </li>
              <li>
                  <p>Creates bulleted and numbered lists.</p>
              </li>
          </ul>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
  );
}

export default TEXT;