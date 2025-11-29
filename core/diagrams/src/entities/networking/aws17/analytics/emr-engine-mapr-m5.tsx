import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMR_ENGINE_MAPR_M5 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr_engine_mapr_m5;fillColor=#F58534;gradientColor=none;',
  },
  _width: 82.5,
  _height: 60,
}

export function EmrEngineMaprM5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EMR_ENGINE_MAPR_M5)} />
}
