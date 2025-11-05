import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_CENTER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.data_center;',
  },
  _original_width: 49.24,
  _original_height: 50,
}

export function DataCenter(props: NodeProps) {
  return (
    <Shape
      {...DATA_CENTER}
      {...props}
      _style={extendStyle(DATA_CENTER, props)}
    />
  )
}
