import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Offers.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 64,
}

export function Offers(props: DiagramNodeProps) {
  return <Shape {...OFFERS} {...props} _style={extendStyle(OFFERS, props)} />
}
