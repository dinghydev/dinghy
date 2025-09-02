import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPBOX_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dropbox2;fillColor=#2FB8FC;gradientColor=#0080E6',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Dropbox2(props: DiagramNodeProps) {
  return (
    <Shape {...DROPBOX_2} {...props} _style={extendStyle(DROPBOX_2, props)} />
  )
}
