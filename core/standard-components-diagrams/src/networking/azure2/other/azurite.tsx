import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURITE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azurite.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 66,
}

export function Azurite(props: DiagramNodeProps) {
  return <Shape {...AZURITE} {...props} _style={extendStyle(AZURITE, props)} />
}
