import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITSM_ADAPTER_FOR_SERVICENOW = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.itsm_adapter_for_servicenow;',
  _width: 50,
  _height: 40.275,
}

export function ItsmAdapterForServicenow(props: DiagramNodeProps) {
  return <Shape {...ITSM_ADAPTER_FOR_SERVICENOW} {...props} />
}
