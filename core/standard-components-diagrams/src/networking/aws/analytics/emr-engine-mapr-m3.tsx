import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMR_ENGINE_MAPR_M3 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.emr_engine_mapr_m3;',
  },
  _original_width: 78,
  _original_height: 59,
}

export function EmrEngineMaprM3(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMR_ENGINE_MAPR_M3}
      {...props}
      _style={extendStyle(EMR_ENGINE_MAPR_M3, props)}
    />
  )
}
