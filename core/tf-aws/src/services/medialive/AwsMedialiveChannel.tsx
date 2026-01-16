import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  channel_class: resolvableValue(z.string()),
  destinations: resolvableValue(
    z.object({
      id: z.string(),
      media_package_settings: z.object({
        channel_id: z.string(),
      }).array().optional(),
      multiplex_settings: z.object({
        multiplex_id: z.string(),
        program_name: z.string(),
      }).optional(),
      settings: z.object({
        password_param: z.string().optional(),
        stream_name: z.string().optional(),
        url: z.string().optional(),
        username: z.string().optional(),
      }).array().optional(),
    }).array(),
  ),
  encoder_settings: resolvableValue(z.object({
    audio_descriptions: z.object({
      audio_selector_name: z.string(),
      audio_type: z.string().optional(),
      audio_type_control: z.string().optional(),
      language_code: z.string().optional(),
      language_code_control: z.string().optional(),
      name: z.string(),
      stream_name: z.string().optional(),
      audio_normalization_settings: z.object({
        algorithm: z.string().optional(),
        algorithm_control: z.string().optional(),
        target_lkfs: z.number().optional(),
      }).optional(),
      audio_watermark_settings: z.object({
        nielsen_watermarks_settings: z.object({
          nielsen_distribution_type: z.string().optional(),
          nielsen_cbet_settings: z.object({
            cbet_check_digit_string: z.string(),
            cbet_stepaside: z.string(),
            csid: z.string(),
          }).optional(),
          nielsen_naes_ii_nw_settings: z.object({
            check_digit_string: z.string(),
            sid: z.number(),
          }).array().optional(),
        }).optional(),
      }).optional(),
      codec_settings: z.object({
        aac_settings: z.object({
          bitrate: z.number().optional(),
          coding_mode: z.string().optional(),
          input_type: z.string().optional(),
          profile: z.string().optional(),
          rate_control_mode: z.string().optional(),
          raw_format: z.string().optional(),
          sample_rate: z.number().optional(),
          spec: z.string().optional(),
          vbr_quality: z.string().optional(),
        }).optional(),
        ac3_settings: z.object({
          bitrate: z.number().optional(),
          bitstream_mode: z.string().optional(),
          coding_mode: z.string().optional(),
          dialnorm: z.number().optional(),
          drc_profile: z.string().optional(),
          lfe_filter: z.string().optional(),
          metadata_control: z.string().optional(),
        }).optional(),
        eac3_atmos_settings: z.object({
          bitrate: z.number().optional(),
          coding_mode: z.string().optional(),
          dialnorm: z.number().optional(),
          drc_line: z.string().optional(),
          drc_rf: z.string().optional(),
          height_trim: z.number().optional(),
          surround_trim: z.number().optional(),
        }).optional(),
        eac3_settings: z.object({
          attenuation_control: z.string().optional(),
          bitrate: z.number().optional(),
          bitstream_mode: z.string().optional(),
          coding_mode: z.string().optional(),
          dc_filter: z.string().optional(),
          dialnorm: z.number().optional(),
          drc_line: z.string().optional(),
          drc_rf: z.string().optional(),
          lfe_control: z.string().optional(),
          lfe_filter: z.string().optional(),
          lo_ro_center_mix_level: z.number().optional(),
          lo_ro_surround_mix_level: z.number().optional(),
          lt_rt_center_mix_level: z.number().optional(),
          lt_rt_surround_mix_level: z.number().optional(),
          metadata_control: z.string().optional(),
          passthrough_control: z.string().optional(),
          phase_control: z.string().optional(),
          stereo_downmix: z.string().optional(),
          surround_ex_mode: z.string().optional(),
          surround_mode: z.string().optional(),
        }).optional(),
        mp2_settings: z.object({
          bitrate: z.number().optional(),
          coding_mode: z.string().optional(),
          sample_rate: z.number().optional(),
        }).optional(),
        pass_through_settings: z.object({}).optional(),
        wav_settings: z.object({
          bit_depth: z.number().optional(),
          coding_mode: z.string().optional(),
          sample_rate: z.number().optional(),
        }).optional(),
      }).optional(),
      remix_settings: z.object({
        channels_in: z.number().optional(),
        channels_out: z.number().optional(),
        channel_mappings: z.object({
          output_channel: z.number(),
          input_channel_levels: z.object({
            gain: z.number(),
            input_channel: z.number(),
          }).array(),
        }).array(),
      }).optional(),
    }).array().optional(),
    avail_blanking: z.object({
      state: z.string().optional(),
      avail_blanking_image: z.object({
        password_param: z.string().optional(),
        uri: z.string(),
        username: z.string().optional(),
      }).optional(),
    }).optional(),
    caption_descriptions: z.object({
      accessibility: z.string().optional(),
      caption_selector_name: z.string(),
      language_code: z.string().optional(),
      language_description: z.string().optional(),
      name: z.string(),
      destination_settings: z.object({
        arib_destination_settings: z.object({}).optional(),
        burn_in_destination_settings: z.object({
          alignment: z.string().optional(),
          background_color: z.string().optional(),
          background_opacity: z.number().optional(),
          font_color: z.string().optional(),
          font_opacity: z.number().optional(),
          font_resolution: z.number().optional(),
          font_size: z.string().optional(),
          outline_color: z.string(),
          outline_size: z.number().optional(),
          shadow_color: z.string().optional(),
          shadow_opacity: z.number().optional(),
          shadow_x_offset: z.number().optional(),
          shadow_y_offset: z.number().optional(),
          teletext_grid_control: z.string(),
          x_position: z.number().optional(),
          y_position: z.number().optional(),
          font: z.object({
            password_param: z.string().optional(),
            uri: z.string(),
            username: z.string().optional(),
          }).optional(),
        }).optional(),
        dvb_sub_destination_settings: z.object({
          alignment: z.string().optional(),
          background_color: z.string().optional(),
          background_opacity: z.number().optional(),
          font_color: z.string().optional(),
          font_opacity: z.number().optional(),
          font_resolution: z.number().optional(),
          font_size: z.string().optional(),
          outline_color: z.string().optional(),
          outline_size: z.number().optional(),
          shadow_color: z.string().optional(),
          shadow_opacity: z.number().optional(),
          shadow_x_offset: z.number().optional(),
          shadow_y_offset: z.number().optional(),
          teletext_grid_control: z.string().optional(),
          x_position: z.number().optional(),
          y_position: z.number().optional(),
          font: z.object({
            password_param: z.string().optional(),
            uri: z.string(),
            username: z.string().optional(),
          }).optional(),
        }).optional(),
        ebu_tt_d_destination_settings: z.object({
          copyright_holder: z.string().optional(),
          fill_line_gap: z.string().optional(),
          font_family: z.string().optional(),
          style_control: z.string().optional(),
        }).optional(),
        embedded_destination_settings: z.object({}).optional(),
        embedded_plus_scte20_destination_settings: z.object({}).optional(),
        rtmp_caption_info_destination_settings: z.object({}).optional(),
        scte20_plus_embedded_destination_settings: z.object({}).optional(),
        scte27_destination_settings: z.object({}).optional(),
        smpte_tt_destination_settings: z.object({}).optional(),
        teletext_destination_settings: z.object({}).optional(),
        ttml_destination_settings: z.object({
          style_control: z.string(),
        }).optional(),
        webvtt_destination_settings: z.object({
          style_control: z.string(),
        }).optional(),
      }).optional(),
    }).array().optional(),
    global_configuration: z.object({
      initial_audio_gain: z.number().optional(),
      input_end_action: z.string().optional(),
      output_locking_mode: z.string().optional(),
      output_timing_source: z.string().optional(),
      support_low_framerate_inputs: z.string().optional(),
      input_loss_behavior: z.object({
        black_frame_msec: z.number().optional(),
        input_loss_image_color: z.string().optional(),
        input_loss_image_type: z.string().optional(),
        repeat_frame_msec: z.number().optional(),
        input_loss_image_slate: z.object({
          password_param: z.string().optional(),
          uri: z.string(),
          username: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
    motion_graphics_configuration: z.object({
      motion_graphics_insertion: z.string().optional(),
      motion_graphics_settings: z.object({
        html_motion_graphics_settings: z.object({}).optional(),
      }),
    }).optional(),
    nielsen_configuration: z.object({
      distributor_id: z.string().optional(),
      nielsen_pcm_to_id3_tagging: z.string().optional(),
    }).optional(),
    output_groups: z.object({
      name: z.string().optional(),
      output_group_settings: z.object({
        archive_group_settings: z.object({
          rollover_interval: z.number().optional(),
          archive_cdn_settings: z.object({
            archive_s3_settings: z.object({
              canned_acl: z.string().optional(),
            }).optional(),
          }).optional(),
          destination: z.object({
            destination_ref_id: z.string(),
          }),
        }).array().optional(),
        frame_capture_group_settings: z.object({
          destination: z.object({
            destination_ref_id: z.string(),
          }),
          frame_capture_cdn_settings: z.object({
            frame_capture_s3_settings: z.object({
              canned_acl: z.string().optional(),
            }).optional(),
          }).optional(),
        }).optional(),
        hls_group_settings: z.object({
          ad_markers: z.string().array().optional(),
          base_url_content: z.string().optional(),
          base_url_content1: z.string().optional(),
          base_url_manifest: z.string().optional(),
          base_url_manifest1: z.string().optional(),
          caption_language_setting: z.string().optional(),
          client_cache: z.string().optional(),
          codec_specification: z.string().optional(),
          constant_iv: z.string().optional(),
          directory_structure: z.string().optional(),
          discontinuity_tags: z.string().optional(),
          encryption_type: z.string().optional(),
          hls_id3_segment_tagging: z.string().optional(),
          iframe_only_playlists: z.string().optional(),
          incomplete_segment_behavior: z.string().optional(),
          index_n_segments: z.number().optional(),
          input_loss_action: z.string().optional(),
          iv_in_manifest: z.string().optional(),
          iv_source: z.string().optional(),
          keep_segments: z.number().optional(),
          key_format: z.string().optional(),
          key_format_versions: z.string().optional(),
          manifest_compression: z.string().optional(),
          manifest_duration_format: z.string().optional(),
          min_segment_length: z.number().optional(),
          mode: z.string().optional(),
          output_selection: z.string().optional(),
          program_date_time: z.string().optional(),
          program_date_time_clock: z.string().optional(),
          program_date_time_period: z.number().optional(),
          redundant_manifest: z.string().optional(),
          segment_length: z.number().optional(),
          segments_per_subdirectory: z.number().optional(),
          stream_inf_resolution: z.string().optional(),
          timed_metadata_id3_frame: z.string().optional(),
          timed_metadata_id3_period: z.number().optional(),
          timestamp_delta_milliseconds: z.number().optional(),
          ts_file_mode: z.string().optional(),
          caption_language_mappings: z.object({
            caption_channel: z.number(),
            language_code: z.string(),
            language_description: z.string(),
          }).array().optional(),
          destination: z.object({
            destination_ref_id: z.string(),
          }),
          hls_cdn_settings: z.object({
            hls_akamai_settings: z.object({
              connection_retry_interval: z.number().optional(),
              filecache_duration: z.number().optional(),
              http_transfer_mode: z.string().optional(),
              num_retries: z.number().optional(),
              restart_delay: z.number().optional(),
              salt: z.string().optional(),
              token: z.string().optional(),
            }).optional(),
            hls_basic_put_settings: z.object({
              connection_retry_interval: z.number().optional(),
              filecache_duration: z.number().optional(),
              num_retries: z.number().optional(),
              restart_delay: z.number().optional(),
            }).optional(),
            hls_media_store_settings: z.object({
              connection_retry_interval: z.number().optional(),
              filecache_duration: z.number().optional(),
              media_store_storage_class: z.string().optional(),
              num_retries: z.number().optional(),
              restart_delay: z.number().optional(),
            }).optional(),
            hls_s3_settings: z.object({
              canned_acl: z.string().optional(),
            }).optional(),
            hls_webdav_settings: z.object({
              connection_retry_interval: z.number().optional(),
              filecache_duration: z.number().optional(),
              http_transfer_mode: z.string().optional(),
              num_retries: z.number().optional(),
              restart_delay: z.number().optional(),
            }).optional(),
          }).array().optional(),
          key_provider_settings: z.object({
            static_key_settings: z.object({
              static_key_value: z.string(),
              key_provider_server: z.object({
                password_param: z.string().optional(),
                uri: z.string(),
                username: z.string().optional(),
              }).optional(),
            }).array().optional(),
          }).optional(),
        }).optional(),
        media_package_group_settings: z.object({
          destination: z.object({
            destination_ref_id: z.string(),
          }),
        }).optional(),
        ms_smooth_group_settings: z.object({
          acquisition_point_id: z.string().optional(),
          audio_only_timecode_control: z.string().optional(),
          certificate_mode: z.string().optional(),
          connection_retry_interval: z.number().optional(),
          event_id: z.string().optional(),
          event_id_mode: z.string().optional(),
          event_stop_behavior: z.string().optional(),
          filecache_duration: z.number().optional(),
          fragment_length: z.number().optional(),
          input_loss_action: z.string().optional(),
          num_retries: z.number().optional(),
          restart_delay: z.number().optional(),
          segmentation_mode: z.string().optional(),
          send_delay_ms: z.number().optional(),
          sparse_track_type: z.string().optional(),
          stream_manifest_behavior: z.string().optional(),
          timestamp_offset: z.string().optional(),
          timestamp_offset_mode: z.string().optional(),
          destination: z.object({
            destination_ref_id: z.string(),
          }),
        }).optional(),
        multiplex_group_settings: z.object({}).optional(),
        rtmp_group_settings: z.object({
          ad_markers: z.string().array().optional(),
          authentication_scheme: z.string().optional(),
          cache_full_behavior: z.string().optional(),
          cache_length: z.number().optional(),
          caption_data: z.string().optional(),
          input_loss_action: z.string().optional(),
          restart_delay: z.number().optional(),
        }).optional(),
        udp_group_settings: z.object({
          input_loss_action: z.string().optional(),
          timed_metadata_id3_frame: z.string().optional(),
          timed_metadata_id3_period: z.number().optional(),
        }).optional(),
      }),
      outputs: z.object({
        audio_description_names: z.string().array().optional(),
        caption_description_names: z.string().array().optional(),
        output_name: z.string().optional(),
        video_description_name: z.string().optional(),
        output_settings: z.object({
          archive_output_settings: z.object({
            extension: z.string().optional(),
            name_modifier: z.string().optional(),
            container_settings: z.object({
              m2ts_settings: z.object({
                absent_input_audio_behavior: z.string().optional(),
                arib: z.string().optional(),
                arib_captions_pid: z.string().optional(),
                arib_captions_pid_control: z.string().optional(),
                audio_buffer_model: z.string().optional(),
                audio_frames_per_pes: z.number().optional(),
                audio_pids: z.string().optional(),
                audio_stream_type: z.string().optional(),
                bitrate: z.number().optional(),
                buffer_model: z.string().optional(),
                cc_descriptor: z.string().optional(),
                dvb_sub_pids: z.string().optional(),
                dvb_teletext_pid: z.string().optional(),
                ebif: z.string().optional(),
                ebp_audio_interval: z.string().optional(),
                ebp_lookahead_ms: z.number().optional(),
                ebp_placement: z.string().optional(),
                ecm_pid: z.string().optional(),
                es_rate_in_pes: z.string().optional(),
                etv_platform_pid: z.string().optional(),
                etv_signal_pid: z.string().optional(),
                fragment_time: z.number().optional(),
                klv: z.string().optional(),
                klv_data_pids: z.string().optional(),
                nielsen_id3_behavior: z.string().optional(),
                null_packet_bitrate: z.number().optional(),
                pat_interval: z.number().optional(),
                pcr_control: z.string().optional(),
                pcr_period: z.number().optional(),
                pcr_pid: z.string().optional(),
                pmt_interval: z.number().optional(),
                pmt_pid: z.string().optional(),
                program_num: z.number().optional(),
                rate_mode: z.string().optional(),
                scte27_pids: z.string().optional(),
                scte35_control: z.string().optional(),
                scte35_pid: z.string().optional(),
                segmentation_markers: z.string().optional(),
                segmentation_style: z.string().optional(),
                segmentation_time: z.number().optional(),
                timed_metadata_behavior: z.string().optional(),
                timed_metadata_pid: z.string().optional(),
                transport_stream_id: z.number().optional(),
                video_pid: z.string().optional(),
                dvb_nit_settings: z.object({
                  network_id: z.number(),
                  network_name: z.string(),
                  rep_interval: z.number().optional(),
                }).optional(),
                dvb_sdt_settings: z.object({
                  output_sdt: z.string().optional(),
                  rep_interval: z.number().optional(),
                  service_name: z.string().optional(),
                  service_provider_name: z.string().optional(),
                }).optional(),
                dvb_tdt_settings: z.object({
                  rep_interval: z.number().optional(),
                }).optional(),
              }).optional(),
              raw_settings: z.object({}).optional(),
            }).optional(),
          }).optional(),
          frame_capture_output_settings: z.object({
            name_modifier: z.string().optional(),
          }).optional(),
          hls_output_settings: z.object({
            h265_packaging_type: z.string().optional(),
            name_modifier: z.string().optional(),
            segment_modifier: z.string().optional(),
            hls_settings: z.object({
              audio_only_hls_settings: z.object({
                audio_group_id: z.string().optional(),
                audio_track_type: z.string().optional(),
                segment_type: z.string().optional(),
                audio_only_image: z.object({
                  password_param: z.string().optional(),
                  uri: z.string(),
                  username: z.string().optional(),
                }).optional(),
              }).optional(),
              fmp4_hls_settings: z.object({
                audio_rendition_sets: z.string().optional(),
                nielsen_id3_behavior: z.string().optional(),
                timed_metadata_behavior: z.string().optional(),
              }).optional(),
              frame_capture_hls_settings: z.object({}).optional(),
              standard_hls_settings: z.object({
                audio_rendition_sets: z.string().optional(),
                m3u8_settings: z.object({
                  audio_frames_per_pes: z.number().optional(),
                  audio_pids: z.string().optional(),
                  ecm_pid: z.string().optional(),
                  nielsen_id3_behavior: z.string().optional(),
                  pat_interval: z.number().optional(),
                  pcr_control: z.string().optional(),
                  pcr_period: z.number().optional(),
                  pcr_pid: z.string().optional(),
                  pmt_interval: z.number().optional(),
                  pmt_pid: z.string().optional(),
                  program_num: z.number().optional(),
                  scte35_behavior: z.string().optional(),
                  scte35_pid: z.string().optional(),
                  timed_metadata_behavior: z.string().optional(),
                  timed_metadata_pid: z.string().optional(),
                  transport_stream_id: z.number().optional(),
                  video_pid: z.string().optional(),
                }),
              }).optional(),
            }),
          }).optional(),
          media_package_output_settings: z.object({}).optional(),
          ms_smooth_output_settings: z.object({
            h265_packaging_type: z.string().optional(),
            name_modifier: z.string().optional(),
          }).optional(),
          multiplex_output_settings: z.object({
            destination: z.object({
              destination_ref_id: z.string(),
            }),
          }).optional(),
          rtmp_output_settings: z.object({
            certificate_mode: z.string().optional(),
            connection_retry_interval: z.number().optional(),
            num_retries: z.number().optional(),
            destination: z.object({
              destination_ref_id: z.string(),
            }),
          }).optional(),
          udp_output_settings: z.object({
            buffer_msec: z.number().optional(),
            container_settings: z.object({
              m2ts_settings: z.object({
                absent_input_audio_behavior: z.string().optional(),
                arib: z.string().optional(),
                arib_captions_pid: z.string().optional(),
                arib_captions_pid_control: z.string().optional(),
                audio_buffer_model: z.string().optional(),
                audio_frames_per_pes: z.number().optional(),
                audio_pids: z.string().optional(),
                audio_stream_type: z.string().optional(),
                bitrate: z.number().optional(),
                buffer_model: z.string().optional(),
                cc_descriptor: z.string().optional(),
                dvb_sub_pids: z.string().optional(),
                dvb_teletext_pid: z.string().optional(),
                ebif: z.string().optional(),
                ebp_audio_interval: z.string().optional(),
                ebp_lookahead_ms: z.number().optional(),
                ebp_placement: z.string().optional(),
                ecm_pid: z.string().optional(),
                es_rate_in_pes: z.string().optional(),
                etv_platform_pid: z.string().optional(),
                etv_signal_pid: z.string().optional(),
                fragment_time: z.number().optional(),
                klv: z.string().optional(),
                klv_data_pids: z.string().optional(),
                nielsen_id3_behavior: z.string().optional(),
                null_packet_bitrate: z.number().optional(),
                pat_interval: z.number().optional(),
                pcr_control: z.string().optional(),
                pcr_period: z.number().optional(),
                pcr_pid: z.string().optional(),
                pmt_interval: z.number().optional(),
                pmt_pid: z.string().optional(),
                program_num: z.number().optional(),
                rate_mode: z.string().optional(),
                scte27_pids: z.string().optional(),
                scte35_control: z.string().optional(),
                scte35_pid: z.string().optional(),
                segmentation_markers: z.string().optional(),
                segmentation_style: z.string().optional(),
                segmentation_time: z.number().optional(),
                timed_metadata_behavior: z.string().optional(),
                timed_metadata_pid: z.string().optional(),
                transport_stream_id: z.number().optional(),
                video_pid: z.string().optional(),
                dvb_nit_settings: z.object({
                  network_id: z.number(),
                  network_name: z.string(),
                  rep_interval: z.number().optional(),
                }).optional(),
                dvb_sdt_settings: z.object({
                  output_sdt: z.string().optional(),
                  rep_interval: z.number().optional(),
                  service_name: z.string().optional(),
                  service_provider_name: z.string().optional(),
                }).optional(),
                dvb_tdt_settings: z.object({
                  rep_interval: z.number().optional(),
                }).optional(),
              }).optional(),
            }),
            destination: z.object({
              destination_ref_id: z.string(),
            }),
            fec_output_settings: z.object({
              column_depth: z.number().optional(),
              include_fec: z.string().optional(),
              row_length: z.number().optional(),
            }).optional(),
          }).optional(),
        }),
      }).array(),
    }).array(),
    timecode_config: z.object({
      source: z.string(),
      sync_threshold: z.number().optional(),
    }),
    video_descriptions: z.object({
      height: z.number().optional(),
      name: z.string(),
      respond_to_afd: z.string().optional(),
      scaling_behavior: z.string().optional(),
      sharpness: z.number().optional(),
      width: z.number().optional(),
      codec_settings: z.object({
        frame_capture_settings: z.object({
          capture_interval: z.number().optional(),
          capture_interval_units: z.string().optional(),
        }).optional(),
        h264_settings: z.object({
          adaptive_quantization: z.string().optional(),
          afd_signaling: z.string().optional(),
          bitrate: z.number().optional(),
          buf_fill_pct: z.number().optional(),
          buf_size: z.number().optional(),
          color_metadata: z.string().optional(),
          entropy_encoding: z.string().optional(),
          fixed_afd: z.string().optional(),
          flicker_aq: z.string().optional(),
          force_field_pictures: z.string().optional(),
          framerate_control: z.string().optional(),
          framerate_denominator: z.number().optional(),
          framerate_numerator: z.number().optional(),
          gop_b_reference: z.string().optional(),
          gop_closed_cadence: z.number().optional(),
          gop_num_b_frames: z.number().optional(),
          gop_size: z.number().optional(),
          gop_size_units: z.string().optional(),
          level: z.string().optional(),
          look_ahead_rate_control: z.string().optional(),
          max_bitrate: z.number().optional(),
          min_i_interval: z.number().optional(),
          num_ref_frames: z.number().optional(),
          par_control: z.string().optional(),
          par_denominator: z.number().optional(),
          par_numerator: z.number().optional(),
          profile: z.string().optional(),
          quality_level: z.string().optional(),
          qvbr_quality_level: z.number().optional(),
          rate_control_mode: z.string().optional(),
          scan_type: z.string().optional(),
          scene_change_detect: z.string().optional(),
          slices: z.number().optional(),
          softness: z.number().optional(),
          spatial_aq: z.string().optional(),
          subgop_length: z.string().optional(),
          syntax: z.string().optional(),
          temporal_aq: z.string().optional(),
          timecode_insertion: z.string().optional(),
          filter_settings: z.object({
            temporal_filter_settings: z.object({
              post_filter_sharpening: z.string().optional(),
              strength: z.string().optional(),
            }).optional(),
          }).optional(),
        }).optional(),
        h265_settings: z.object({
          adaptive_quantization: z.string().optional(),
          afd_signaling: z.string().optional(),
          alternative_transfer_function: z.string().optional(),
          bitrate: z.number(),
          buf_size: z.number().optional(),
          color_metadata: z.string().optional(),
          fixed_afd: z.string().optional(),
          flicker_aq: z.string().optional(),
          framerate_denominator: z.number(),
          framerate_numerator: z.number(),
          gop_closed_cadence: z.number().optional(),
          gop_size: z.number().optional(),
          gop_size_units: z.string().optional(),
          level: z.string().optional(),
          look_ahead_rate_control: z.string().optional(),
          max_bitrate: z.number().optional(),
          min_i_interval: z.number().optional(),
          min_qp: z.number().optional(),
          mv_over_picture_boundaries: z.string().optional(),
          mv_temporal_predictor: z.string().optional(),
          par_denominator: z.number().optional(),
          par_numerator: z.number().optional(),
          profile: z.string().optional(),
          qvbr_quality_level: z.number().optional(),
          rate_control_mode: z.string().optional(),
          scan_type: z.string().optional(),
          scene_change_detect: z.string().optional(),
          slices: z.number().optional(),
          tier: z.string().optional(),
          tile_height: z.number().optional(),
          tile_padding: z.string().optional(),
          tile_width: z.number().optional(),
          timecode_insertion: z.string().optional(),
          treeblock_size: z.string().optional(),
          color_space_settings: z.object({
            color_space_passthrough_settings: z.object({}).optional(),
            dolby_vision81_settings: z.object({}).optional(),
            hdr10_settings: z.object({
              max_cll: z.number().optional(),
              max_fall: z.number().optional(),
            }).optional(),
            rec601_settings: z.object({}).optional(),
            rec709_settings: z.object({}).optional(),
          }).optional(),
          filter_settings: z.object({
            temporal_filter_settings: z.object({
              post_filter_sharpening: z.string().optional(),
              strength: z.string().optional(),
            }).optional(),
          }).optional(),
          timecode_burnin_settings: z.object({
            prefix: z.string().optional(),
            timecode_burnin_font_size: z.string().optional(),
            timecode_burnin_position: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).array().optional(),
  })),
  input_attachments: resolvableValue(
    z.object({
      input_attachment_name: z.string(),
      input_id: z.string(),
      automatic_input_failover_settings: z.object({
        error_clear_time_msec: z.number().optional(),
        input_preference: z.string().optional(),
        secondary_input_id: z.string(),
        failover_condition: z.object({
          failover_condition_settings: z.object({
            audio_silence_settings: z.object({
              audio_selector_name: z.string(),
              audio_silence_threshold_msec: z.number().optional(),
            }).optional(),
            input_loss_settings: z.object({
              input_loss_threshold_msec: z.number().optional(),
            }).optional(),
            video_black_settings: z.object({
              black_detect_threshold: z.number().optional(),
              video_black_threshold_msec: z.number().optional(),
            }).optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
      input_settings: z.object({
        deblock_filter: z.string().optional(),
        denoise_filter: z.string().optional(),
        filter_strength: z.number().optional(),
        input_filter: z.string().optional(),
        scte35_pid: z.number().optional(),
        smpte2038_data_preference: z.string().optional(),
        source_end_behavior: z.string().optional(),
        audio_selector: z.object({
          name: z.string(),
          selector_settings: z.object({
            audio_hls_rendition_selection: z.object({
              group_id: z.string(),
              name: z.string(),
            }).optional(),
            audio_language_selection: z.object({
              language_code: z.string(),
              language_selection_policy: z.string().optional(),
            }).optional(),
            audio_pid_selection: z.object({
              pid: z.number(),
            }).optional(),
            audio_track_selection: z.object({
              dolby_e_decode: z.object({
                program_selection: z.string(),
              }).optional(),
              tracks: z.object({
                track: z.number(),
              }).array(),
            }).optional(),
          }).optional(),
        }).array().optional(),
        caption_selector: z.object({
          language_code: z.string().optional(),
          name: z.string(),
          selector_settings: z.object({
            ancillary_source_settings: z.object({
              source_ancillary_channel_number: z.number().optional(),
            }).optional(),
            arib_source_settings: z.object({}).optional(),
            dvb_sub_source_settings: z.object({
              ocr_language: z.string().optional(),
              pid: z.number().optional(),
            }).optional(),
            embedded_source_settings: z.object({
              convert_608_to_708: z.string().optional(),
              scte20_detection: z.string().optional(),
              source_608_channel_number: z.number().optional(),
            }).optional(),
            scte20_source_settings: z.object({
              convert_608_to_708: z.string().optional(),
              source_608_channel_number: z.number().optional(),
            }).optional(),
            scte27_source_settings: z.object({
              ocr_language: z.string().optional(),
              pid: z.number().optional(),
            }).optional(),
            teletext_source_settings: z.object({
              page_number: z.string().optional(),
              output_rectangle: z.object({
                height: z.number(),
                left_offset: z.number(),
                top_offset: z.number(),
                width: z.number(),
              }).optional(),
            }).optional(),
          }).optional(),
        }).array().optional(),
        network_input_settings: z.object({
          server_validation: z.string().optional(),
          hls_input_settings: z.object({
            bandwidth: z.number().optional(),
            buffer_segments: z.number().optional(),
            retries: z.number().optional(),
            retry_interval: z.number().optional(),
            scte35_source: z.string().optional(),
          }).optional(),
        }).optional(),
        video_selector: z.object({
          color_space: z.string().optional(),
          color_space_usage: z.string().optional(),
        }).optional(),
      }).optional(),
    }).array(),
  ),
  input_specification: resolvableValue(z.object({
    codec: z.string(),
    input_resolution: z.string(),
    maximum_bitrate: z.string(),
  })),
  name: resolvableValue(z.string()),
  cdi_input_specification: resolvableValue(
    z.object({
      resolution: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  log_level: resolvableValue(z.string().optional()),
  maintenance: resolvableValue(
    z.object({
      maintenance_day: z.string(),
      maintenance_start_time: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  start_channel: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc: resolvableValue(
    z.object({
      availability_zones: z.string().array().optional(),
      network_interface_ids: z.string().array().optional(),
      public_address_allocation_ids: z.string().array(),
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  channel_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/medialive_channel

export function AwsMedialiveChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsMedialiveChannel, idFilter, baseNode, optional)

export const useAwsMedialiveChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsMedialiveChannel, idFilter, baseNode, optional)
