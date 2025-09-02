import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_GENERIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Database_General.svg;strokeColor=none;',
  },
  _original_width: 38,
  _original_height: 50,
}

export function DatabaseGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_GENERIC}
      {...props}
      _style={extendStyle(DATABASE_GENERIC, props)}
    />
  )
}
