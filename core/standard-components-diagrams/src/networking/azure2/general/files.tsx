import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Files.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 70,
}

export function Files(props: DiagramNodeProps) {
  return <Shape {...FILES} {...props} _style={extendStyle(FILES, props)} />
}
