import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITSM_ADAPTER_FOR_SERVICENOW = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.itsm_adapter_for_servicenow;',
  },
  _original_width: 50,
  _original_height: 40.275,
}

export function ItsmAdapterForServicenow(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ITSM_ADAPTER_FOR_SERVICENOW)}
    />
  )
}
