import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLIENT_SOFTWARE_DEPLOYMENT_WIZARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.client_software',
  },
  _original_width: 50,
  _original_height: 45,
}

export function ClientSoftwareDeploymentWizard(props: NodeProps) {
  return (
    <Shape
      {...CLIENT_SOFTWARE_DEPLOYMENT_WIZARD}
      {...props}
      _style={extendStyle(CLIENT_SOFTWARE_DEPLOYMENT_WIZARD, props)}
    />
  )
}
