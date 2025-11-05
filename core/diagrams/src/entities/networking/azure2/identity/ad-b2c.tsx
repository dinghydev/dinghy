import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AD_B2C = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_B2C.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function AdB2c(props: NodeProps) {
  return <Shape {...AD_B2C} {...props} _style={extendStyle(AD_B2C, props)} />
}
