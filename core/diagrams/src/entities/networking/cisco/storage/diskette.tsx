import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISKETTE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.diskette;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 50,
}

export function Diskette(props: DiagramNodeProps) {
  return (
    <Shape {...DISKETTE} {...props} _style={extendStyle(DISKETTE, props)} />
  )
}
