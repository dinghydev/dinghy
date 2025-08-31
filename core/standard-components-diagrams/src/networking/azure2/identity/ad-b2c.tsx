import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_B2C = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_B2C.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 64,
}

export function AdB2c(props: DiagramNodeProps) {
  return <Shape {...AD_B2C} {...props} _style={extendStyle(AD_B2C, props)} />
}
