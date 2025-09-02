import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAS_FILER = {
  _style: {
    entity:
      'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.nas_filer;network2IconW=1;network2IconH=0.62;',
  },
  _original_width: 50,
  _original_height: 31,
}

export function NasFiler(props: DiagramNodeProps) {
  return (
    <Shape {...NAS_FILER} {...props} _style={extendStyle(NAS_FILER, props)} />
  )
}
