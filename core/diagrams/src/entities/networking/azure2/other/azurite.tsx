import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURITE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azurite.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function Azurite(props: DiagramNodeProps) {
  return <Shape {...AZURITE} {...props} _style={extendStyle(AZURITE, props)} />
}
