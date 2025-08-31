import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVERNOTE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.evernote;fillColor=#3F3F3F',
  },
  _width: 63.400000000000006,
  _height: 75.2,
}

export function Evernote(props: DiagramNodeProps) {
  return (
    <Shape {...EVERNOTE} {...props} _style={extendStyle(EVERNOTE, props)} />
  )
}
