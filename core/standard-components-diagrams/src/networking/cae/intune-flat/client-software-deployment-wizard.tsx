import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT_SOFTWARE_DEPLOYMENT_WIZARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.client_software',
  },
  _width: 50,
  _height: 45,
}

export function ClientSoftwareDeploymentWizard(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_SOFTWARE_DEPLOYMENT_WIZARD}
      {...props}
      _style={extendStyle(CLIENT_SOFTWARE_DEPLOYMENT_WIZARD, props)}
    />
  )
}
