import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DB_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.db_on_instance2;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function DbInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...DB_INSTANCE}
      {...props}
      _style={extendStyle(DB_INSTANCE, props)}
    />
  )
}
