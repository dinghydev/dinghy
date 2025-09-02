import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_TRANSFORMATION_ENGINE_CTE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.content_transformation_engine_(cte);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 98,
  _original_height: 64,
}

export function ContentTransformationEngineCte(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_TRANSFORMATION_ENGINE_CTE}
      {...props}
      _style={extendStyle(CONTENT_TRANSFORMATION_ENGINE_CTE, props)}
    />
  )
}
