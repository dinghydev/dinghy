import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYSTEM_CONTEXT_DIAGRAM_TITLE = {
  _style:
    'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;whiteSpace=wrap;rounded=0;metaEdit=1;allowArrows=0;resizable=1;rotatable=0;connectable=0;recursiveResize=0;expand=0;pointerEvents=0;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];',
  _width: 0,
  _height: 40,
}

export function SystemContextDiagramTitle(props: DiagramNodeProps) {
  return <Shape {...SYSTEM_CONTEXT_DIAGRAM_TITLE} {...props} />
}
