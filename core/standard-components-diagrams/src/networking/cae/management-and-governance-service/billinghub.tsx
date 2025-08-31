import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BILLINGHUB = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/BillingHub.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Billinghub(props: DiagramNodeProps) {
  return (
    <Shape {...BILLINGHUB} {...props} _style={extendStyle(BILLINGHUB, props)} />
  )
}
