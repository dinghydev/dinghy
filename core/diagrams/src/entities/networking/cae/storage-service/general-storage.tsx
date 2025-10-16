import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERAL_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/General_Storage.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function GeneralStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERAL_STORAGE}
      {...props}
      _style={extendStyle(GENERAL_STORAGE, props)}
    />
  )
}
