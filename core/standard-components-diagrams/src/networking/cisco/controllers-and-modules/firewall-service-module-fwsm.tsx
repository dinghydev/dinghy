import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL_SERVICE_MODULE_FWSM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.firewall_service_module_(fwsm);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 53,
  _height: 85,
}

export function FirewallServiceModuleFwsm(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_SERVICE_MODULE_FWSM}
      {...props}
      _style={extendStyle(FIREWALL_SERVICE_MODULE_FWSM, props)}
    />
  )
}
