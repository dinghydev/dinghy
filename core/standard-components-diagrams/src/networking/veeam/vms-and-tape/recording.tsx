import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECORDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.recording;',
  },
  _width: 36,
  _height: 36,
}

export function Recording(props: DiagramNodeProps) {
  return (
    <Shape {...RECORDING} {...props} _style={extendStyle(RECORDING, props)} />
  )
}
