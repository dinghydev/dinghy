import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMR_ENGINE_MAPR_M5 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.emr_engine_mapr_m5;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function EmrEngineMaprM5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EMR_ENGINE_MAPR_M5)} />
}
