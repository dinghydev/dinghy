import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPBOX2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dropbox;fillColor=#0287EA',
  },
  _width: 73.4,
  _height: 62,
}

export function Dropbox2(props: DiagramNodeProps) {
  return (
    <Shape {...DROPBOX2} {...props} _style={extendStyle(DROPBOX2, props)} />
  )
}
