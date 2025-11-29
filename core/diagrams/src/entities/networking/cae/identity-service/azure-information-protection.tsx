import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_INFORMATION_PROTECTION = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.cloud.azure_rights_management_rms;fillColor=#58B4D9;',
  },
  _original_width: 42,
  _original_height: 50,
}

export function AzureInformationProtection(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AZURE_INFORMATION_PROTECTION)}
    />
  )
}
