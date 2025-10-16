import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ESXI_HYPER_V_HOST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.esxi_hyper_v_host;',
  },
  _original_width: 82,
  _original_height: 79,
}

export function EsxiHyperVHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...ESXI_HYPER_V_HOST}
      {...props}
      _style={extendStyle(ESXI_HYPER_V_HOST, props)}
    />
  )
}
