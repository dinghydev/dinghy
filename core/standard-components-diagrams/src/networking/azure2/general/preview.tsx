import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PREVIEW = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Preview.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 64,
}

export function Preview(props: DiagramNodeProps) {
  return <Shape {...PREVIEW} {...props} _style={extendStyle(PREVIEW, props)} />
}
