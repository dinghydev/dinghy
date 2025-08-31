import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_INFORMATION_PROTECTION = {
  _style:
    'sketch=0;aspect=fixed;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.cloud.azure_rights_management_rms;fillColor=#58B4D9;',
  _width: 42,
  _height: 50,
}

export function AzureInformationProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_INFORMATION_PROTECTION}
      {...props}
      _style={extendStyle(AZURE_INFORMATION_PROTECTION, props)}
    />
  )
}
