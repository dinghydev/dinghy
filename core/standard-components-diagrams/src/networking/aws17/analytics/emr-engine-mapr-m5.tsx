import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMR_ENGINE_MAPR_M5 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr_engine_mapr_m5;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 82.5,
  _original_height: 60,
}

export function EmrEngineMaprM5(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMR_ENGINE_MAPR_M5}
      {...props}
      _style={extendStyle(EMR_ENGINE_MAPR_M5, props)}
    />
  )
}
