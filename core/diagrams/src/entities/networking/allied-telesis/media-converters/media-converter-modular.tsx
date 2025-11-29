import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_CONVERTER_MODULAR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Media_Converter_Modular.svg;strokeColor=none;',
  },
  _original_width: 70.8,
  _original_height: 54.6,
}

export function MediaConverterModular(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MEDIA_CONVERTER_MODULAR)} />
  )
}
