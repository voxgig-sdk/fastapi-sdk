<?php
declare(strict_types=1);

// Fastapi SDK utility: result_headers

class FastapiResultHeaders
{
    public static function call(FastapiContext $ctx): ?FastapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
