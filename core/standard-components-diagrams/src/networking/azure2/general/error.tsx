import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Error.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 68,
}

export function Error(props: DiagramNodeProps) {
  return <Shape {...ERROR} {...props} _style={extendStyle(ERROR, props)} />
}
