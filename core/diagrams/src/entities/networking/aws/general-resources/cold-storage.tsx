import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLD_STORAGE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cold_storage;',
  },
  _original_width: 71,
  _original_height: 78,
}

export function ColdStorage(props: NodeProps) {
  return (
    <Shape
      {...COLD_STORAGE}
      {...props}
      _style={extendStyle(COLD_STORAGE, props)}
    />
  )
}
