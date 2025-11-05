import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_AD_B2C = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_B2C.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function AzureAdB2c(props: NodeProps) {
  return (
    <Shape
      {...AZURE_AD_B2C}
      {...props}
      _style={extendStyle(AZURE_AD_B2C, props)}
    />
  )
}
