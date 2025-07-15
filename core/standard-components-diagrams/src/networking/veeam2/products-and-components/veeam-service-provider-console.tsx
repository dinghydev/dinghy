import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_SERVICE_PROVIDER_CONSOLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_service_provider_console;',
  _width: 34,
  _height: 34,
}

export function VeeamServiceProviderConsole(props: DiagramNodeProps) {
  return <Shape {...VEEAM_SERVICE_PROVIDER_CONSOLE} {...props} />
}
