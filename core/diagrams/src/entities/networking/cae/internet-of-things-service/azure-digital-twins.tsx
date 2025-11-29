import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_DIGITAL_TWINS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Digital_Twins.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function AzureDigitalTwins(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AZURE_DIGITAL_TWINS)} />
}
