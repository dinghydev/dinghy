import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.disk;',
  },
  _original_width: 35,
  _original_height: 50,
}

export function Disk(props: DiagramNodeProps) {
  return <Shape {...DISK} {...props} _style={extendStyle(DISK, props)} />
}
