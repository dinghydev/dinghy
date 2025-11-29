import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_TRANSFORMATION_ENGINE_CTE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.content_transformation_engine_(cte);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 98,
  _height: 64,
}

export function ContentTransformationEngineCte(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTENT_TRANSFORMATION_ENGINE_CTE)}
    />
  )
}
