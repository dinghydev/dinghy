import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GLOBE_SUCCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Globe_Success.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 66,
}

export function GlobeSuccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLOBE_SUCCESS}
      {...props}
      _style={extendStyle(GLOBE_SUCCESS, props)}
    />
  )
}
