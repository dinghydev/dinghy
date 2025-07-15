import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVERNOTE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.evernote;fillColor=#D4EF75;gradientColor=#399F1F',
  _width: 102.4,
  _height: 102.4,
}

export function Evernote(props: DiagramNodeProps) {
  return <Shape {...EVERNOTE} {...props} />
}
